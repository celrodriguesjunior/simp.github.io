﻿using Dapper;
using Microsoft.Extensions.Configuration;
using SIMP.Classes;
using SIMP.Constants;
using SIMP.Models;
using SIMP.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SIMP.Services.Oracle{
    
    public class InteresseRepositoryOracle : TableBaseRepositoryOracle, IInteresseRepository{
        
        private readonly ICursoRepository cursoRepository;
        private readonly IPropostaRepository propostaRepository;
        private readonly IInstituicaoRepository instituicaoRepository;
        private readonly IAgrupadorArquivoRepository agrupadorArquivoRepository;
        private readonly IPropostaUniversitarioRepository propostaUniversitarioRepository;
        private readonly IUniversitarioRepository universitarioRepository;
        private readonly IEmailSender emailSender;

        public InteresseRepositoryOracle(ICursoRepository cursoRepository, IPropostaRepository propostaRepository, IInstituicaoRepository instituicaoRepository, IAgrupadorArquivoRepository agrupadorArquivoRepository, IPropostaUniversitarioRepository propostaUniversitarioRepository, IUniversitarioRepository universitarioRepository, IEmailSender emailSender, IConfiguration configuration) : base(configuration){
            this.cursoRepository = cursoRepository;
            this.propostaRepository = propostaRepository;
            this.instituicaoRepository = instituicaoRepository;
            this.agrupadorArquivoRepository = agrupadorArquivoRepository;
            this.propostaUniversitarioRepository = propostaUniversitarioRepository;
            this.universitarioRepository = universitarioRepository;
            this.emailSender = emailSender;
        }

        private void CheckModel(Interesse Model){
            if(Model == null
            || (Model.Nr_id_proposta <= 0
                && Model.Nr_id_universitario <= 0))
                throw new Exception("Campos obrigatórios não foram informados");
        }

        public async Task<bool> Desactive(Interesse Model){
            CheckModel(Model);
            Universitario Universitario = await universitarioRepository.GetByIdUser(Model.Nr_id_universitario);
            if(Universitario is not null){
                Model.Nr_id_universitario = Universitario.Nr_id;
                if(await Connection.ExecuteAsync(
                    $@"UPDATE {TBL_INTERESSE.NAME} 
                            SET {TBL_INTERESSE.DS_STATUS} = 'DESATIVO'
                        WHERE {TBL_INTERESSE.NR_ID_PROPOSTA} = {Model.Nr_id_proposta}
                            AND {TBL_INTERESSE.NR_ID_UNIVERSITARIO} = {Model.Nr_id_universitario}
                            AND {TBL_INTERESSE.DS_STATUS} = 'ATIVO'") > 0){
                    Proposta Proposta = await propostaRepository.GetById(Model.Nr_id_proposta, 0);
                    string SubJectEmail = "Desinscrição de interesse";
                    string BodyEmail = "<html><body>Olá "+ Proposta.Instituicao.Ds_nome_exibido.Trim() +"<br><br>"+
                                        "Através da nossa plataforma, o usuário "+ Universitario.Ds_nome_exibido +" <b>removeu seu interesse</b> em participar da proposta "+ Proposta.Ds_nome.Trim() +".<br><br>"+
                                        "Dessa forma, ele indica que <b>não deseja receber contato da sua instituição para assuntos relacionados a essa proposta.</b><br><br>"+
                                        "Atenciosamente,<br>"+
                                        "Equipe SIMP</body></html>";
                    //string[] RecipientsEmail = [proposta.Instituicao.ds_email];
                    string[] RecipientsEmail = new string[] {"xxcollazzoxx@gmail.com","rodriguesjuniorcelio@gmail.com", "hwilbert@furb.br"};
                    return await emailSender.SendEmail("GMail", new Email(BodyEmail, SubJectEmail, RecipientsEmail));
                }
            }
            return false;
        }

        public async Task<bool> Delete(Interesse Model){
            CheckModel(Model);
            Universitario Universitario = await universitarioRepository.GetByIdUser(Model.Nr_id_universitario);
            if(Universitario is not null){
                Model.Nr_id_universitario = Universitario.Nr_id;
                return await Connection.ExecuteAsync(
                    $@"DELETE FROM {TBL_INTERESSE.NAME} 
                            WHERE {TBL_INTERESSE.NR_ID_PROPOSTA} = {Model.Nr_id_proposta}
                              AND {TBL_INTERESSE.NR_ID_UNIVERSITARIO} = {Model.Nr_id_universitario}") > 0;
            }
            return false;
        }

        private async Task<bool> SendEmail(Interesse Model, bool Recidivist = false){
            Proposta Proposta = await propostaRepository.GetById(Model.Nr_id_proposta, 0);
            Universitario Universitario = await universitarioRepository.GetById(Model.Nr_id_universitario);
            string SubjectEmail;
            string BodyEmail;
            if(Recidivist){ 
                SubjectEmail = "Reinscrição de interesse";
                BodyEmail = "<hml><body>Olá "+ Proposta.Instituicao.Ds_nome_exibido.Trim() +"<br><br>"+
                            "Através da nossa plataforma, o usuário "+ Universitario.Ds_nome_exibido.Trim() +" <b>demonstrou interesse novamente</b> em participar da proposta "+ Proposta.Ds_nome.Trim() +".<br><br>"+
                            "<b>Aqui estão algumas informações desse universitário para contato:</b><br>"+
                            "<b>E-mail</b>: "+ Universitario.Ds_email.Trim() +"<br>"+
                            "<b>Telefone</b>: "+ Universitario.Ds_telefone.Trim() +"<br><br>"+
                            "Você pode também acessar o perfil desse usuário através do seguinte link:<br>"+
                            "<a href=\"https://celrodriguesjunior.github.io/simp.github.io/perfilUsuario.html?id="+ Universitario.Nr_id +"\">https://celrodriguesjunior.github.io/simp.github.io/perfilUsuario.html?id="+ Universitario.Nr_id +"</a><br><br>"+
                            "Atenciosamente,<br>"+
                            "Equipe SIMP</body></html>";
            }else{
                SubjectEmail = "Inscrição de interesse";
                BodyEmail = "<hml><body>Olá "+ Proposta.Instituicao.Ds_nome_exibido.Trim() +"<br><br>"+
                            "Através da nossa plataforma, o usuário "+ Universitario.Ds_nome_exibido.Trim() +" demonstrou interesse em participar da proposta "+ Proposta.Ds_nome.Trim() +".<br><br>"+
                            "<b>Aqui estão algumas informações desse universitário para contato:</b><br>"+
                            "<b>E-mail</b>: "+ Universitario.Ds_email.Trim() +"<br>"+
                            "<b>Telefone</b>: "+ Universitario.Ds_telefone.Trim() +"<br><br>"+
                            "Você pode também acessar o perfil desse usuário através do seguinte link:<br>"+
                            "<a href=\"https://celrodriguesjunior.github.io/simp.github.io/perfilUsuario.html?id="+ Universitario.Nr_id +"\">https://celrodriguesjunior.github.io/simp.github.io/perfilUsuario.html?id="+ Universitario.Nr_id +"</a><br><br>"+
                            "Atenciosamente,<br>"+
                            "Equipe SIMP</body></html>";
            }
            //string[] RecipientsEmail = [proposta.Instituicao.ds_email];
            string[] RecipientsEmail = new string[] {"xxcollazzoxx@gmail.com","rodriguesjuniorcelio@gmail.com", "hwilbert@furb.br"};
            return await emailSender.SendEmail("GMail", new Email(BodyEmail, SubjectEmail, RecipientsEmail));
        }

        public async Task<bool> Insert(Interesse Model){
            CheckModel(Model);
            Universitario Universitario = await universitarioRepository.GetByIdUser(Model.Nr_id_universitario);
            if(Universitario is not null){
                Model.Nr_id_universitario = Universitario.Nr_id;
                if(await propostaUniversitarioRepository.GetByUniversityProposals(Model.Nr_id_universitario, Model.Nr_id_proposta) is null){
                    Interesse Interesse = await Connection.QueryFirstOrDefaultAsync<Interesse>(
                        $@"SELECT * FROM {TBL_INTERESSE.NAME}
                                WHERE {TBL_INTERESSE.NR_ID_PROPOSTA} = {Model.Nr_id_proposta}
                                AND {TBL_INTERESSE.NR_ID_UNIVERSITARIO} = {Model.Nr_id_universitario}");
                    if(Interesse is not null){
                        DateTime SevenDaysEarlier = DateTime.Now.AddDays(-7);
                        if(Interesse.Ds_status.Equals("DESATIVO")
                        && Interesse.Dt_geracao < SevenDaysEarlier){
                            return await Connection.ExecuteAsync(
                                $@"UPDATE {TBL_INTERESSE.NAME}
                                        SET {TBL_INTERESSE.DT_INTERESSE} = SYSDATE,
                                            {TBL_INTERESSE.DS_STATUS} = 'ATIVO'
                                    WHERE {TBL_INTERESSE.NR_ID_PROPOSTA} = {Model.Nr_id_proposta}
                                        AND {TBL_INTERESSE.NR_ID_UNIVERSITARIO} = {Model.Nr_id_universitario}") > 0
                                && await SendEmail(Model, true); // Está demonstrando interesse novamente (reincidência)
                        }
                    }else{
                        return await Connection.ExecuteAsync(
                            $@"INSERT INTO {TBL_INTERESSE.NAME}
                                            ({TBL_INTERESSE.NR_ID},
                                                {TBL_INTERESSE.NR_ID_PROPOSTA},
                                                {TBL_INTERESSE.NR_ID_UNIVERSITARIO},
                                                {TBL_INTERESSE.DT_INTERESSE},
                                                {TBL_INTERESSE.DS_STATUS})
                                    VALUES ({await GetNextValSequence(TBL_INTERESSE.NR_ID.SEQUENCE)},
                                            {Model.Nr_id_proposta},
                                            {Model.Nr_id_universitario},
                                            SYSDATE,
                                            'ATIVO')") > 0
                            && await SendEmail(Model);
                    }
                }
            }
            return false;
        }

        public async Task<bool> AcceptInterest(Interesse Model){
            CheckModel(Model);
            Universitario Universitario = await universitarioRepository.GetByIdUser(Model.Nr_id_universitario);
            if(Universitario is not null){
                Model.Nr_id_universitario = Universitario.Nr_id;
                if(await propostaUniversitarioRepository.GetByUniversityProposals(Model.Nr_id_universitario, Model.Nr_id_proposta) is null){
                    Interesse interesse = await Connection.QueryFirstOrDefaultAsync<Interesse>(
                        $@"SELECT * FROM {TBL_INTERESSE.NAME}
                            WHERE {TBL_INTERESSE.NR_ID_PROPOSTA} = {Model.Nr_id_proposta}
                                AND {TBL_INTERESSE.NR_ID_UNIVERSITARIO} = {Model.Nr_id_universitario}");
                    if(interesse is not null
                    && await Delete(new Interesse() { Nr_id_proposta = Model.Nr_id_proposta, Nr_id_universitario = Universitario.Nr_id_usuario})
                    && await propostaUniversitarioRepository.Insert(new PropostaUniversitario(){ Nr_id_proposta = Model.Nr_id_proposta, Nr_id_universitario = Model.Nr_id_universitario })){
                        Proposta proposta = await propostaRepository.GetById(Model.Nr_id_proposta, 0);
                        proposta.Cd_status = "DV";
                        if(await propostaRepository.Update(proposta, await agrupadorArquivoRepository.ListAllFilesByAgrupador(proposta.Nr_agrupador_arquivo)) is not null){
                            // Envia e-mail
                            Proposta Proposta = await propostaRepository.GetById(Model.Nr_id_proposta, 0);
                            string SubjectEmail = "Aceitação de interesse de proposta";
                            string BodyEmail = "<hml><body>Olá "+ Universitario.Ds_nome_exibido.Trim() +"<br><br>"+
                                                    "Através da nossa plataforma, a instituicao "+ Proposta.Instituicao.Ds_nome_exibido.Trim() +" aceitou o seu interesse em participar da proposta "+ Proposta.Ds_nome.Trim() +".<br><br>"+
                                                    "<b>Aqui estão algumas informações dessa instituição para contato:</b><br>"+
                                                    "<b>E-mail</b>: "+ Proposta.Instituicao.Ds_email.Trim() +"<br>"+
                                                    "<b>Telefone</b>: "+ Proposta.Instituicao.Ds_telefone.Trim() +"<br><br>"+
                                                    "Você pode também acessar o perfil dessa instituição através do seguinte link:<br>"+
                                                    "https://celrodriguesjunior.github.io/simp.github.io/perfilUsuario.html?id="+ Proposta.Instituicao.Nr_id +"<br><br>"+
                                                    "Atenciosamente,<br>"+
                                                    "Equipe SIMP</body></html>";

                            //string[] RecipientsEmail = [Universitario.Ds_email];
                            string[] RecipientsEmail = new string[] {"xxcollazzoxx@gmail.com","rodriguesjuniorcelio@gmail.com", "hwilbert@furb.br"};
                            await emailSender.SendEmail("GMail", new Email(BodyEmail, SubjectEmail, RecipientsEmail));
                            return true;
                        }
                    }
                }
                else{
                    return true;
                }
            }
            return false;
        }

        public async Task<IEnumerable<Universitario>> ListAllByProposals(int Id_proposta){
            IEnumerable<Universitario> Models = await Connection.QueryAsync<Universitario>(
                $@"SELECT USU.{TBL_USUARIO.DS_EMAIL},
                          USU.{TBL_USUARIO.DS_SENHA},
                          USU.{TBL_USUARIO.DS_NOME_EXIBIDO},
                          USU.{TBL_USUARIO.NR_AGRUPADOR_ARQUIVO},
                          UNI.* FROM {TBL_INTERESSE.NAME} INT, {TBL_UNIVERSITARIO.NAME} UNI,
                                        {TBL_USUARIO.NAME} USU
                     WHERE INT.{TBL_INTERESSE.NR_ID_UNIVERSITARIO} = UNI.{TBL_UNIVERSITARIO.NR_ID}
                       AND UNI.{TBL_UNIVERSITARIO.NR_ID_USUARIO} = USU.{TBL_USUARIO.NR_ID}
                       AND INT.{TBL_INTERESSE.DS_STATUS} = 'ATIVO'
                       AND INT.{TBL_INTERESSE.NR_ID_PROPOSTA} = {Id_proposta}");
            foreach(Universitario Model in Models)
                Model.AgrupadorArquivo = await agrupadorArquivoRepository.ListAllByAgrupador(Model.Nr_agrupador_arquivo);
            return Models;
        }

        public async Task<IEnumerable<Proposta>> ListAllByUniversity(int Id_usuario){
            IEnumerable<Proposta> Models = await Connection.QueryAsync<Proposta>(
                $@"SELECT PRO.* FROM {TBL_INTERESSE.NAME} INT, {TBL_PROPOSTA.NAME} PRO, {TBL_UNIVERSITARIO.NAME} UNI, {TBL_USUARIO.NAME} USU
                     WHERE INT.{TBL_INTERESSE.NR_ID_PROPOSTA} = PRO.{TBL_PROPOSTA.NR_ID}
                       AND INT.{TBL_INTERESSE.NR_ID_UNIVERSITARIO} = UNI.{TBL_UNIVERSITARIO.NR_ID}
                       AND UNI.{TBL_UNIVERSITARIO.NR_ID_USUARIO} = USU.{TBL_USUARIO.NR_ID}
                       AND INT.{TBL_INTERESSE.DS_STATUS} = 'ATIVO'
                       AND USU.{TBL_USUARIO.NR_ID} = {Id_usuario}");
            foreach(Proposta Model in Models){
                Model.Curso = await cursoRepository.GetById(Model.Nr_id_curso);
                Model.Instituicao = await instituicaoRepository.GetById(Model.Nr_id_instituicao);
                Model.AgrupadorArquivo = await agrupadorArquivoRepository.ListAllByAgrupador(Model.Nr_agrupador_arquivo);
                Model.Universitarios = await propostaUniversitarioRepository.ListAllByProposals(Model.Nr_id);
            }
            return Models;
        }

        public async Task<Interesse> GetByProposalsUniversity(int Id_proposta, int Id_usuario){
            return await Connection.QueryFirstOrDefaultAsync<Interesse>(
                $@"SELECT * FROM {TBL_INTERESSE.NAME} INT, {TBL_UNIVERSITARIO.NAME} UNI, {TBL_USUARIO.NAME} USU
                    WHERE INT.{TBL_INTERESSE.NR_ID_UNIVERSITARIO} = UNI.{TBL_UNIVERSITARIO.NR_ID}
                      AND UNI.{TBL_UNIVERSITARIO.NR_ID_USUARIO} = USU.{TBL_USUARIO.NR_ID}
                      AND INT.{TBL_INTERESSE.NR_ID_PROPOSTA} = {Id_proposta}
                      AND USU.{TBL_USUARIO.NR_ID} = {Id_usuario}");
        }

        public Task<bool> Update(Interesse Model){
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Interesse>> GetAll(){
            throw new NotImplementedException();
        }
    }

}

using Dapper;
using Microsoft.Extensions.Configuration;
using SIMP.Constants;
using SIMP.Models;
using SIMP.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SIMP.Services.Oracle{

    public class CursoRepositoryOracle : TableBaseRepositoryOracle, ICursoRepository{

        public CursoRepositoryOracle(IConfiguration configuration) : base(configuration) { }

        public async Task<bool> Delete(Curso Model){
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Curso>> GetAll(){
            return await Connection.QueryAsync<Curso>(
                @$"SELECT * FROM {TBL_CURSO.NAME} 
                ORDER BY {TBL_CURSO.DS_NOME}");
        }

        public async Task<Curso> GetById(int Id){
            return await Connection.QueryFirstOrDefaultAsync<Curso>(
                @$"SELECT * FROM {TBL_CURSO.NAME} 
                    WHERE {TBL_CURSO.NR_ID.NAME} = {Id}");
        }

        public async Task<bool> Insert(Curso Model){
            throw new System.NotImplementedException();
        }

        public async Task<bool> Update(Curso Model){
            throw new System.NotImplementedException();
        }
    }
}

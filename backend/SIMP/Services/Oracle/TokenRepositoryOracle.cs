using Dapper;
using Microsoft.Extensions.Configuration;
using SIMP.Constants;
using SIMP.Models;
using SIMP.Repositories;
using System;
using System.Threading.Tasks;

namespace SIMP.Services.Oracle{
    
    public class TokenRepositoryOracle : TableBaseRepositoryOracle, ITokenRepository{

        public TokenRepositoryOracle(IConfiguration configuration) : base(configuration){ }

        private async Task<string> GetNewGuid(){
            return await Task.Run(() => Guid.NewGuid().ToString());
        }

        public async Task<Token> GetById(int Id){
            return await Connection.QueryFirstOrDefaultAsync<Token>(
                $@"SELECT * FROM {TBL_TOKEN.NAME}
                        WHERE {TBL_TOKEN.NR_ID} = {Id}");
        }

        public async Task<Token> GetByToken(string Token){
            return await Connection.QueryFirstOrDefaultAsync<Token>(
                $@"SELECT * FROM {TBL_TOKEN.NAME}
                        WHERE {TBL_TOKEN.DS_TOKEN} = '{Token}'");
        }

        public async Task<Token> Insert(){
            Token model = new Token();
            model.Nr_id = await GetNextValSequence(TBL_TOKEN.NR_ID.SEQUENCE);
            model.Ds_token = await GetNewGuid();
            model.Dt_data_limite = DateTime.Now.AddHours(1);
            string Sql = $@"INSERT INTO {TBL_TOKEN.NAME}
                                        ({TBL_TOKEN.NR_ID},
                                        {TBL_TOKEN.DS_TOKEN},
                                        {TBL_TOKEN.DT_DATA_LIMITE})
                                VALUES (:{TBL_TOKEN.NR_ID},
                                        :{TBL_TOKEN.DS_TOKEN},
                                        :{TBL_TOKEN.DT_DATA_LIMITE})";
            await Connection.ExecuteAsync(Sql, new { model.Nr_id, model.Ds_token, model.Dt_data_limite });
            return model;
        }
    }
}

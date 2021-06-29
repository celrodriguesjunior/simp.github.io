using Dapper;
using Microsoft.Extensions.Configuration;
using SIMP.Constants;
using SIMP.Models;
using SIMP.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SIMP.Services.Oracle{
    
    public class ThingRepositoryOracle: TableBaseRepositoryOracle, IThingRepository{

        public ThingRepositoryOracle(IConfiguration configuration) : base(configuration) { }

        public async Task<int> GetAll(string Nome){
            return await Connection.QueryFirstOrDefaultAsync<int>(
                $@"SELECT COUNT(*) FROM {TBL_THING.NAME}
                        WHERE TRIM({TBL_THING.NOME}) = '{Nome.Trim()}'");
        }

        private void CheckModel(Thing Model){
            if(String.IsNullOrEmpty(Model.Nome))
                throw new Exception("Nome inválido");
        }
        
        public async Task<bool> Insert(Thing Model){
            CheckModel(Model);
            return await Connection.ExecuteAsync(
                $@"INSERT INTO {TBL_THING.NAME} 
                        ({TBL_THING.ID},
                            {TBL_THING.NOME},
                            {TBL_THING.TEMP},
                            {TBL_THING.UMID},
                            {TBL_THING.DATA}) 
                    VALUES ({await GetNextValSequence(TBL_THING.ID.SEQUENCE)},
                            '{Model.Nome}',
                            '{Model.Temp}',
                            '{Model.Umid}',
                            SYSDATE)") > 0;
        }

        public Task<bool> Update(Thing Model){
            throw new NotImplementedException();
        }

        public Task<bool> Delete(Thing Model){
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Thing>> GetAll(){
            throw new NotImplementedException();
        }
    }
}

using Dapper;
using Microsoft.Extensions.Configuration;
using SIMP.Constants;
using SIMP.Models;
using SIMP.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SIMP.Services.Oracle{

    public class PaisRepositoryOracle : TableBaseRepositoryOracle, IPaisRepository{

        public PaisRepositoryOracle(IConfiguration configuration) : base(configuration) { }

        public async Task<bool> Delete(Pais Model){
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Pais>> GetAll(){
            return await Connection.QueryAsync<Pais>(
                @$"SELECT * FROM {TBL_PAIS.NAME}
                ORDER BY {TBL_PAIS.DS_NOME_PT}");
        }

        public async Task<Pais> GetById(int Id){
            return await Connection.QueryFirstOrDefaultAsync<Pais>(
                @$"SELECT * FROM {TBL_PAIS.NAME}
                    WHERE {TBL_PAIS.NR_ID} = {Id}");
        }

        public async Task<bool> Insert(Pais Model){
            throw new System.NotImplementedException();
        }

        public async Task<bool> Update(Pais Model)
        {
            throw new System.NotImplementedException();
        }
    }
}

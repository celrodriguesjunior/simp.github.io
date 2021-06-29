using SIMP.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SIMP.Repositories{
    
    public interface IAcessosPropostaRepository : ITableRepository<AcessosProposta>{

        public Task<AcessosProposta> GetById(int Id);

    }

}

using SIMP.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SIMP.Repositories{
    
    public interface IPropostaUniversitarioRepository : ITableRepository<PropostaUniversitario>{
        public Task<IEnumerable<Proposta>> ListAllByUniversity(int Id_universitario, string Status);
        public Task<IEnumerable<Universitario>> ListAllByProposals(int Id_proposta);
        public Task<PropostaUniversitario> GetByUniversityProposals(int Id_universitario, int Id_proposta);

    }
}

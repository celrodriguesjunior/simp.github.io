using SIMP.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SIMP.Repositories{

    public interface IInteresseRepository : ITableRepository<Interesse>{
        public Task<IEnumerable<Universitario>> ListAllByProposals(int Id_proposta);
        public Task<bool> Desactive(Interesse Model);
        public Task<bool> AcceptInterest(Interesse Model);
        public Task<IEnumerable<Proposta>> ListAllByUniversity(int Id_usuario);
        public Task<Interesse> GetByProposalsUniversity(int Id_proposta, int Id_usuario);

    }
}

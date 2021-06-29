using SIMP.Models;
using System.Threading.Tasks;

namespace SIMP.Repositories{

    public interface IPaisRepository : ITableRepository<Pais>{
        public Task<Pais> GetById(int Id);

    }

}

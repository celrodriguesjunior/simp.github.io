using SIMP.Models;
using System.Threading.Tasks;

namespace SIMP.Repositories{
    
    public interface IThingRepository : ITableRepository<Thing>{
        public Task<int> GetAll(string Nome);

    }

}

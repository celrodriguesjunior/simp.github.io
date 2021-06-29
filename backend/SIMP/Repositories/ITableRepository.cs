using System.Collections.Generic;
using System.Threading.Tasks;

namespace SIMP.Repositories{
    
    public interface ITableRepository<T>{

        public Task<bool> Insert(T Model);
        public Task<bool> Update(T Model);
        public Task<bool> Delete(T Model);
        public Task<IEnumerable<T>> GetAll();

    }
}

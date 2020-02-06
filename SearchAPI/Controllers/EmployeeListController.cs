using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using SearchAPI.Models;

namespace SearchAPI.Controllers
{
    
    public class EmployeeListController : ApiController
    {
        [HttpGet]
        public async Task<IHttpActionResult> Get()
        {
            EMPLOYEE_SEARCH_DBEntities db = new EMPLOYEE_SEARCH_DBEntities();
            return await Task.Run(() => this.Ok(db.EMPLOYEES.ToList()));
        }
    }
}
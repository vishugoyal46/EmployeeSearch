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
        //[RoutePrefix("Employees")]
        [HttpGet]
        public async Task<IHttpActionResult> Get()
        {
            //List<EMPLOYEE> list = new List<EMPLOYEE>();
            EMPLOYEE_SEARCH_DBEntities db = new EMPLOYEE_SEARCH_DBEntities();
            //list = db.EMPLOYEES.ToList();
            return await Task.Run(() => this.Ok(db.EMPLOYEES.ToList()));
        }
    }
}
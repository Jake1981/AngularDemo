namespace AngularDemo.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Web.Http;

    using AngularDemo.Domain.Entities;
    using AngularDemo.Domain.Services;

    public class QuestionApiController : ApiController
    {
        public QuestionService _questionService;

        public QuestionApiController()
        {
            _questionService = new QuestionService();
        }

        public IEnumerable<Question> Get()
        {
            return _questionService.All();
        }

        // GET api/<controller>/5
        public Question Get(Guid id)
        {
            return _questionService.Get(id);
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {

        }
    }
}
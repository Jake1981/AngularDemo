namespace AngularDemo.Domain.Services
{
    using System;
    using System.Collections.Generic;
    using AngularDemo.Domain.Entities;
    using AngularDemo.Domain.Repositorys;

    public class QuestionService
    {
        public readonly QuestionRepository _repository;

        public QuestionService()
        {
            _repository = new QuestionRepository();
        }

        public List<Question> All()
        {
            return _repository.All(); 
        }

        public Question Get(Guid id)
        {
            return _repository.Get(id);
        }

        public void Save(Question question)
        {
            _repository.Save(question);
        }
    }
}
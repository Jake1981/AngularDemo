namespace AngularDemo.Domain.Entities
{
    using System;
    using System.Collections.Generic;

    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public List<Reply> Replys { get; set; }
        public DateTime CreatedOn { get; set; }
        public string PostedBy { get; set; }
    }

    public class Reply
    {
        public string Answer { get; set; }
        public int Votes { get; set; }
        public DateTime RepliedOn { get; set; }
        public string PosstedBy { get; set; }
    }
}
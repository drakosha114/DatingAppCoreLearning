namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public byte[] PasswordHasn { get; set; }

        public byte[] PaswordSalt { get; set; }
     }
}

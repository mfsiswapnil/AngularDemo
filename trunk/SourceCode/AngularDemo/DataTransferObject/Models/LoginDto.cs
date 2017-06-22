﻿using DataTransferObject.Constants;

namespace DataTransferObject.Models
{
    public class LoginDto
    {
        public string LoginId { get; set; }
        public string LoginPassword { get; set; }

        public LoginDto() { }

        public LoginDto(string loginId = CommonString.OptionalStringParam, string loginPassword=CommonString.OptionalStringParam)
        {
            LoginId = loginId;
            LoginPassword = loginPassword;
        }
    }
}
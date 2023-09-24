using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Configuration;
    public class GmailSender
    {
        public static bool SendMail(string to, string subject, string message)
        {
            try
            {
                string gMailAccount = "jpanelhosting@gmail.com";
                string password = "jatinbirbal";
                NetworkCredential loginInfo = new NetworkCredential(gMailAccount, password);
                MailMessage msg = new MailMessage();
                msg.From = new MailAddress(gMailAccount, "Amazon Services");
                msg.To.Add(new MailAddress(to));
                msg.Subject = subject;
                msg.Body = message;
                msg.IsBodyHtml = true;
                SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
                client.EnableSsl = true;
                client.UseDefaultCredentials = false;
                client.Credentials = loginInfo;
                client.Send(msg);

                return true;
            }
            catch (Exception)
            {
                return false;
            }

        }


     
    }

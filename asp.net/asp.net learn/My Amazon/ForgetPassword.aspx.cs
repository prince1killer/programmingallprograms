using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Data;
using System.Web.UI.WebControls;

public partial class ForgetPassword : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
            
    }



    protected void Button1_Click(object sender, EventArgs e)
    {
        registratinBal rbal = new registratinBal();
        DAL rdal = new DAL();
        rbal.email = TextBox1.Text;
        DataSet ds = rdal.getemailofregistereduser(rbal);
        if (ds.Tables[0].Rows.Count > 0)
        {
            Random r = new Random();
            Session["vcode"] = r.Next(100000, 999999).ToString();
            Session["email"] = ds.Tables[0].Rows[0]["email"].ToString();


            string msg = "Your OTP code For Change Password is <b>" +Session["vcode"] + "</b> .";
            if (GmailSender.SendMail(TextBox1.Text, "Send Otp Of Change Password", msg))
            {
                Response.Write("<script>alert('Your OTP has been sent on Your Email Address. Please Check Your Email.');window.location.href='otpvarification.aspx';</script>");
                
            }
            else
            {
                Response.Write("<script>alert('Please Check Internet Connection.')</script>");
            }

            

        }
        else
        {
            Response.Write("<script>alert('Email id Is Wrong.')</script>");
        }


    }

    
}
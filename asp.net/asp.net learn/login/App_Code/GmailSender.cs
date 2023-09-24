using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Mail;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

/// <summary>
/// Summary description for GmailSender
/// </summary>
public class GmailSender
{
    SqlCommand cmd;
    SqlConnection con;
    SqlDataAdapter da;
    DataSet ds;
    void mycon()
    {
        con = new SqlConnection(ConfigurationManager.ConnectionStrings["Dbcon"].ToString());
        con.Open();
    }

	public GmailSender()
	{
		//
		// TODO: Add constructor logic here
		//
	}
    public static bool SendMail(string to, string subject, string message)
    {
        try
        {
            NetworkCredential loginInfo = new NetworkCredential("pranavkumar0234@gmail.com", "mpekyifeqeggimfp");
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("pranavkumar0234@gmail.com", "Pranav WebShop");
            msg.To.Add(new MailAddress(to));
            msg.Subject = subject;
            msg.Body = message;
            msg.IsBodyHtml = true;
            SmtpClient client = new SmtpClient("smtp.gmail.com",587);
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

    public void filldropdown(DropDownList drop, string tblname, string dttext, string dtvalue, string select)
    {
        mycon();
        cmd = new SqlCommand("select * from "+tblname+"", con);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        drop.DataSource = ds;
        drop.DataTextField = dttext;
        drop.DataValueField = dtvalue;
        drop.DataBind();
        drop.Items.Insert(0, "---Select " + select + "---");
        drop.Items[0].Value = "0";

    }
}

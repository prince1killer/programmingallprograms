using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Diagnostics.Eventing.Reader;
using System.Runtime.Remoting.Services;

public partial class forgotpassword : System.Web.UI.Page
{

    SqlCommand cmd;
    SqlConnection con;
    SqlDataAdapter da;
    DataSet ds;

    void myforgot() {
        con = new SqlConnection("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=|datadirectory|login.mdf;Integrated Security=True");
        con.Open();
    }

    string codeGen() {
        Random r = new Random();
        string newpass = r.Next(10000, 99999).ToString();
        string msg = newpass;
        return msg;

    }


    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        
    }
    protected void Button1_Click1(object sender, EventArgs e)
    {
        string msg = codeGen();
        String pass = msg;
            myforgot();

            cmd = new SqlCommand("select * from login_table where email='" + TextBox1.Text + "'", con);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);
            if (ds.Tables[0].Rows.Count >0)
            {
                if (GmailSender.SendMail(TextBox1.Text, "Your New Password", msg))
                {
                //Response.Write("your new password has beeen successfull sent");
                //Response.Write(msg);
                    Application["email"] = TextBox1.Text;
                    Application["pass"] = pass;
                    Response.Redirect("passwordchange.aspx");
                }   
                else
                {
                    Response.Write("please check your network operator");
                }
            }
            else
            {
                
                Response.Write("Please enter the valid email id");
            }
            cmd.ExecuteNonQuery();
            con.Close();

    }

    protected void Button2_Click(object sender, EventArgs e)
    {

    }

    protected void Button2_Click1(object sender, EventArgs e)
    {
        
        
    }
}
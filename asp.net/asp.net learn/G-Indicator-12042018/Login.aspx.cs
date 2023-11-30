using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using gIndicator.DAL;
using gIndicator.BAL;
using System.Data;
using System.Data.SqlClient;
public partial class Login : System.Web.UI.Page
{
    common com = new common();

    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (TextBox1.Text == "" || TextBox2.Text == "")
        {
            Page.ClientScript.RegisterStartupScript(this.GetType(), "Call my function", "showalert('Please Fill all the Feilds', 'alert-danger') ", true);
        }

        else
        {

            string tb = "User_mstr where username='" + TextBox1.Text + "' and password='" + TextBox2.Text + "'";
            com.select_All("*", tb);
            if (com.ds.Tables[0].Rows.Count > 0)
            {
                if (com.ds.Tables[0].Rows[0]["status"].ToString() == "Deactive")
                {
                    Session["vcode"] = com.ds.Tables[0].Rows[0]["vcode"].ToString();
                    Session["temuid"] = com.ds.Tables[0].Rows[0][0].ToString();
                    Session["temuser"] = com.ds.Tables[0].Rows[0]["username"].ToString();
                    Session["temname"] = com.ds.Tables[0].Rows[0][1].ToString();
                    Response.Redirect("Verification.aspx");

                }
                else
                {
                    Session["uid"] = com.ds.Tables[0].Rows[0][0].ToString();
                    Session["user"] = com.ds.Tables[0].Rows[0]["username"].ToString();
                    Session["name"] = com.ds.Tables[0].Rows[0][1].ToString();
                    Response.Redirect("user/userHome.aspx");
                }
             
            }
            else
            {
                Page.ClientScript.RegisterStartupScript(this.GetType(), "Call my function", "showalert('Invalid Username or Password', 'alert-danger') ", true);
            }
        }

    }
}
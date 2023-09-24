using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;


public partial class Login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {

        if (TextBox1.Text=="admin" && TextBox2.Text=="admin")
        {

            Response.Redirect("Admin/Dashboard.aspx?adminsession="+TextBox1.Text);




        }

        registratinBal rbal = new registratinBal();
        rbal.email = TextBox1.Text;
        rbal.password = TextBox2.Text;
        DAL rdal = new DAL();
        DataSet ds=rdal.getregistereduserinfo(rbal);
        if (ds.Tables[0].Rows.Count>0)
        {
            //Response.Write("<script>alert('User Authenticated.....')</script>");

            HttpCookie h1 = new HttpCookie("user");
            h1.Values.Add("userid", ds.Tables[0].Rows[0]["userid"].ToString());
            h1.Values.Add("username", ds.Tables[0].Rows[0]["name"].ToString());
            h1.Expires = System.DateTime.Now.AddHours(2);
            Response.Cookies.Add(h1);
            Response.Redirect("Default.aspx");
        }
        else
        {
            Response.Write("<script>alert('Check Email or Password.....')</script>");

        }

    }
}
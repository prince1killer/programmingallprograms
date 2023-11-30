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
public partial class NewPassword : System.Web.UI.Page
{
    common com = new common();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["s1"] == null)
        {
            Response.Redirect("Login.aspx");
            
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        bool rval = com.ExecuteQuery("update User_mstr set password='" + TextBox1.Text + "' where username='" + Session["s1"].ToString() + "'");
        if (rval == true)
        {
            Response.Write("<script>alert('Password is Changed Successfully'); window.location.href='Login.aspx';</script>");
            
        }
        else
        {
            Response.Write("<script>alert('Try Again ')</script>");

        }
        Session["uid"] = "";
    }
}
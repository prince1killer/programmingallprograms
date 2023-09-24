using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["adminsession"] != null)
        {
            Response.Redirect("Dashboard.aspx");


        }
        else
        {
            //Response.Redirect("../Default.aspx");


        }

        //if (Session["userid"] == null)
        //{
        //    Response.Redirect("../Default.aspx");

        //}

    }
    protected void lnkLogout_Click(object sender, EventArgs e)
    {
        Session.Abandon();
        Response.Redirect("../Login.aspx");
    }
}

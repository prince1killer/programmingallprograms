using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class Admin_usermaster : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        registratinBal rbal = new registratinBal();
        DAL rdal = new DAL();
        DataSet ds = rdal.getallusersinfo();
        if (ds.Tables[0].Rows.Count>0)
        {
            dataGrid.DataSource = ds;
            dataGrid.DataBind();
            
        }
        else
        {
            dataGrid.DataSource = null;
            dataGrid.DataBind();
        }


    }
}
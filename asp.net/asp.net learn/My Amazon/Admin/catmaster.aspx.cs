using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_A_CustomerList : System.Web.UI.Page
{
 
    public void fillgrid()
    {
        DAL rDAL = new DAL();
        DataSet ds = rDAL.getcategorydata();
        if (ds.Tables[0].Rows.Count > 0)
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
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {

            fillgrid();
        }
    }

    protected void dataGrid_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        string cid = e.CommandArgument.ToString();
        BAL rBal = new BAL();
        rBal.catid = Convert.ToInt32(cid);
        DAL d1 = new DAL();
        int returnval=d1.deleterow(rBal);
        if (returnval==1)
        {
            Response.Write("<script>alert('Delete Successfully')</script>");
        }
        else
        {
        }
        fillgrid();

    }
}
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_thirdcatmaster : System.Web.UI.Page
{

    void fillgrid()
    {
        DAL rDAL = new DAL();
        DataSet ds = rDAL.getthirdcategorydata();
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
        fillgrid();
    }

    protected void dataGrid_RowCommand(object sender, GridViewCommandEventArgs e)
    {

        string cid = e.CommandArgument.ToString();
        ThirdBal rBal = new ThirdBal();
        rBal.thirdcatid = Convert.ToInt32(cid);
        DAL d1 = new DAL();
        int returnval = d1.deletethirdcatrow(rBal);
        if (returnval == 1)
        {
            Response.Write("<script>alert('Delete Successfully')</script>");
        }
        else
        {
        }

        fillgrid();

    }
}
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class searchmaster : System.Web.UI.Page
{
    void fillgrid()
    {
        orderBal rbal = new orderBal();
        rbal.thirdcatname = Request.QueryString["order"].ToString();
        DAL rDAL = new DAL();
        DataSet ds = rDAL.searchItems(rbal);

        if (ds.Tables[0].Rows.Count > 0)
        {
            Label1.Text = "Search Results of " + Request.QueryString["order"].ToString() + "....";

            Repeater1.DataSource = ds;
            Repeater1.DataBind();
        }
        else
        {

            Label1.Text = "No Results... " ;


            Repeater1.DataSource = null;
            Repeater1.DataBind();

        }
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            fillgrid();

        }
    }
}
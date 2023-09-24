using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_ordermaster : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {

          
                //orderBal rBal = new orderBal();
                DAL rDAL = new DAL();
                DataSet ds = rDAL.getorders();
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



    }
}
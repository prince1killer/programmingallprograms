using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    void fillgrid()
    {
        DAL rDAL = new DAL();
        DataSet ds = rDAL.getthirdcategorydata();
        if (ds.Tables[0].Rows.Count > 0)
        {
            Repeater1.DataSource = ds;
            Repeater1.DataBind();
        }
        else
        {
            Repeater1.DataSource = null;
            Repeater1.DataBind();

        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        fillgrid();

    }
}
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class cartmaster : System.Web.UI.Page
{
    cartBal obal = new cartBal();
    DAL odal = new DAL();
    void fillgrid()
    {
        if (Request.Cookies["user"] != null)
        {
            obal.userid = Convert.ToInt32(Request.Cookies["user"].Values["userid"]);
            DataSet ds = odal.getcartmasterdata(obal);
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
    protected void Page_Load(object sender, EventArgs e)
    {
        cartBal obal = new cartBal();
        DAL odal = new DAL();

        if (!IsPostBack)
        {
            if (Request.Cookies["user"] != null)
            {
                obal.userid = Convert.ToInt32(Request.Cookies["user"].Values["userid"]);
                DataSet ds = odal.getcartmasterdata(obal);  
                if (ds.Tables[0].Rows.Count > 0)
                {
                    Label1.Text = "";
                    dataGrid.DataSource = ds;
                    dataGrid.DataBind();

                }
                else
                {
                    dataGrid.DataSource = null;
                    dataGrid.DataBind();

                }
            }
            else
            {
                Response.Redirect("Default.aspx");
                //Response.Write("<script>alert('Must Login');</script>");
            }

        }
    }

    protected void dataGrid_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        string cmd = e.CommandArgument.ToString();

        cartBal obal = new cartBal();
        obal.cartid = Convert.ToInt32(cmd);
        DAL odal = new DAL();
        int val = odal.deletecartitems(obal);
        if (val == 1)
        {
            Response.Write("<script>alert('Successfully deleted..')</script>");
            Response.Redirect(Request.RawUrl);

        }
        else
        {

        }
        fillgrid();


    }
}
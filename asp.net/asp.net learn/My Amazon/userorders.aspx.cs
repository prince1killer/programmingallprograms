using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class userorders : System.Web.UI.Page
{
    
    protected void Page_Load(object sender, EventArgs e)
    {
        orderBal obal = new orderBal();
        DAL odal = new DAL();

        if (!IsPostBack)
        {
            if (Request.Cookies["user"] != null)
            {

                obal.userid = Convert.ToInt32(Request.Cookies["user"].Values["userid"]);


                DataSet ds = odal.getordersofuser(obal);
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
            else
            {
                Response.Write("<script>window.location.href='Default.aspx'</script>");
            }

        }
    }




    protected void dataGrid_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        string cmdabc = e.CommandArgument.ToString();
        orderBal obal = new orderBal();
        obal.orderid = Convert.ToInt32(cmdabc);
        DAL odal = new DAL();
        int val= odal.deleteorderforuser(obal);
        if (val==1)
        {
            Response.Write("<script>alert('Successfully deleted..')</script>");
            if (Request.Cookies["user"] != null)
            {

                obal.userid = Convert.ToInt32(Request.Cookies["user"].Values["userid"]);

                 odal = new DAL();

                DataSet ds = odal.getordersofuser(obal);
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
            else
            {
                //Response.Write("<script>alert('Must Login');</script>");
                Response.Write("<script>window.location.href='Default.aspx'</script>");

            }

        }
        else
        {

        }

       





    }
}

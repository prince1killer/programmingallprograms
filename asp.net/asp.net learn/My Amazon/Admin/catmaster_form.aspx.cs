using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Configuration;


public partial class Admin_A_CustomerForm : System.Web.UI.Page
{




    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {

            if (Request.QueryString["edit"] != null)
            {
                BAL rBal = new BAL();
                rBal.catid = Convert.ToInt32(Request.QueryString["edit"]);
                DAL rDAL = new DAL();
                DataSet ds = rDAL.getcategorydatafromquerystring(rBal);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    TextBox1.Text = ds.Tables[0].Rows[0]["category"].ToString();
                }
                else
                {
                    Response.Redirect("catmaster.aspx");

                }

            }
            else
            {

            }


        }



    }



    protected void lnk1_Click(object sender, EventArgs e)
    {
        BAL rBal = new BAL();
        rBal.catid =Convert.ToInt32( Request.QueryString["edit"]);
        rBal.catname = TextBox1.Text;
        rBal.catdate = Convert.ToDateTime(System.DateTime.Now);
        DAL rDal = new DAL();

        if (Request.QueryString["edit"] != null)
        {

            int rval = rDal.updaterow(rBal);
            if (rval == 1)
            {
                Response.Write("<script>alert('Category Successfully Updated...');window.location.href='catmaster.aspx'</script>");
            }
            else
            {

            }

        }
        else
        {
           
            int rval = rDal.categoryinsert(rBal);
            if (rval == 1)
            {
                Response.Write("<script>alert('Registration Successfully')</script>");
            }
            else
            {

            }
        }


    }
}
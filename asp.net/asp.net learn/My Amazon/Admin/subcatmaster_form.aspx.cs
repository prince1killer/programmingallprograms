using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_subcatmaster_form : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {

            subBAL Rbal = new subBAL();
            DAL rDAL = new DAL();

                DataSet ds = rDAL.getcategorydata();
                if (ds.Tables[0].Rows.Count > 0)
                {
                    drop1.DataSource = ds;
                    drop1.DataBind();
                    drop1.DataTextField = "category";
                    drop1.DataValueField = "catid";
                    drop1.DataBind();
                    drop1.Items.Insert(0, "---select platform---");
                    drop1.Items[0].Value = "0";
                }
                else
                {
                    Response.Redirect("subcatmaster.aspx");
                }


            if (Request.QueryString["edit"] != null)
            {


                Rbal.subcatid = Convert.ToInt32(Request.QueryString["edit"]);

                 ds = rDAL.getsubcatdatafromquerystring(Rbal);

                if (ds.Tables[0].Rows.Count > 0)
                {

                    drop1.SelectedValue = (ds.Tables[0].Rows[0]["catid"]).ToString();
                    TextBox1.Text = ds.Tables[0].Rows[0]["subcategory"].ToString();

                }
                else
                {

                }
                {
                }


            }
            else
            {

            }


        }

    }

    protected void lnk1_Click(object sender, EventArgs e)
    {
        subBAL sBAl = new subBAL();
        DAL sDal = new DAL();
        if (Request.QueryString["edit"] != null)
        {
            sBAl.subcatid=Convert.ToInt32(Request.QueryString["edit"]);
            sBAl.subcat = TextBox1.Text;
            sBAl.subcatdate = Convert.ToDateTime(System.DateTime.Now);
            sBAl.catid = Convert.ToInt32(drop1.SelectedValue);
            sDal.updatesubcat(sBAl);
            Response.Write("<script>alert('Subcategory Successfully Updated...');window.location.href='subcatmaster.aspx'</script>");
        }
        else { 


        
        sBAl.subcat = TextBox1.Text;
        sBAl.subcatdate = Convert.ToDateTime(System.DateTime.Now); 
        sBAl.catid =Convert.ToInt32(drop1.SelectedValue);
        int fval=sDal.subcatmasterinsert(sBAl);
        if (fval==1)
        {
            Response.Write("<script>alert('Registration Successfully')</script>");


        }
        else
        {

        }

        }

    }
}
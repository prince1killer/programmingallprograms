using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_thirdcatmaster_form : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {


        if (IsPostBack == false)
        {

          
            ThirdBal rbal = new ThirdBal();

            DAL rDAL = new DAL();

            DataSet ds = rDAL.getsubcategorydata();
            if (ds.Tables[0].Rows.Count > 0)
            {
                drop1.DataSource = ds;
                drop1.DataBind();
                drop1.DataTextField = "subcategory";
                drop1.DataValueField = "subcatid";
                drop1.DataBind();
                drop1.Items.Insert(0, "---select platform---");
                drop1.Items[0].Value = "0";

            }
            else
            {
                drop1.DataSource = null;
                drop1.DataBind();
                Response.Redirect("subcatmaster.aspx");
            }


            if (Request.QueryString["edit"] != null)
            {

                rbal.thirdcatid = Convert.ToInt32(Request.QueryString["edit"]);

                ds = rDAL.getthirdcatdatafromquerystring(rbal);

                if (ds.Tables[0].Rows.Count > 0)
                {

                    drop1.SelectedValue = (ds.Tables[0].Rows[0]["catid"]).ToString();
                    TextBox1.Text = ds.Tables[0].Rows[0]["thirdcatname"].ToString();
                    TextBox2.Text = ds.Tables[0].Rows[0]["thirdcatprice"].ToString();
                    TextBox3.Text = ds.Tables[0].Rows[0]["thirdcatdesc"].ToString();
                    Image1.ImageUrl = ds.Tables[0].Rows[0]["thirdcatimg"].ToString();
                    ViewState["path"] = ds.Tables[0].Rows[0]["thirdcatimg"].ToString();

                    //static string path = ds.Tables[0].Rows[0]["thirdcatimg"].ToString();


                }
                else
                {
                    drop1.DataSource = ds;
                    drop1.DataBind();

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
        
        ThirdBal sBAl = new ThirdBal();
        DAL sDal = new DAL();
        if (Request.QueryString["edit"] != null)
        {
            sBAl.thirdcatid = Convert.ToInt32(Request.QueryString["edit"]);
            sBAl.thirdcatname = TextBox1.Text;
            sBAl.catid = Convert.ToInt32(drop1.SelectedValue);
            sBAl.thirdcatprice = TextBox2.Text;
            sBAl.thirdcatdesc = TextBox3.Text;
            if (FileUpload1.HasFile)
            {
                FileUpload1.SaveAs(Server.MapPath("~/Admin/img/"+FileUpload1.FileName));
                ViewState["path"] = "~/Admin/img/" + FileUpload1.FileName;

            }
            else
            {
               
            }
            Image1.ImageUrl = ViewState["path"].ToString();
            sBAl.thirdcatimg = ViewState["path"].ToString();
            sBAl.thirdcatdate = Convert.ToDateTime(System.DateTime.Now);
            sDal.updatethirdcat(sBAl);
            Response.Write("<script>alert('Subcategory Successfully Updated...');window.location.href='thirdcatmaster.aspx'</script>");



        }
        else
        {



            if (FileUpload1.HasFile)
            {
                FileUpload1.SaveAs(Server.MapPath("~/Admin/img/" + FileUpload1.FileName));
                ViewState["path"] = "~/Admin/img/" + FileUpload1.FileName;

            }
            sBAl.thirdcatprice = TextBox2.Text;
            sBAl.thirdcatdesc = TextBox3.Text;
            sBAl.thirdcatimg = ViewState["path"].ToString();

            Image1.ImageUrl = ViewState["path"].ToString();

            sBAl.thirdcatname = TextBox1.Text;
            sBAl.thirdcatdate = Convert.ToDateTime(System.DateTime.Now);
            sBAl.catid = Convert.ToInt32(drop1.SelectedValue);
            int fval = sDal.thirdcatmasterinsert(sBAl);

            if (fval == 1)
            {
                Response.Write("<script>alert('Registration Successfully')</script>");
            }
            else
            {
                
            }

        }

    }
}
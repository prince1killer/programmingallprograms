using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI.HtmlControls;

public partial class Client_clientcheckout : System.Web.UI.Page
{
    SqlCommand cmd;
    SqlConnection cn;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=C:\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        //cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\New E drive\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        cn.Open();
    }

    void checkout()
    {
        cmd = new SqlCommand("select addproducts.*, ordertable.* from addproducts left join ordertable on addproducts.id = ordertable.productid where ordertable.clientid=@id", cn);
        cmd.Parameters.AddWithValue("@id", Session["clientlogin"]);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);


        if (ds.Tables[0].Rows.Count > 0)
        {
            checkoutrpt.DataSource=ds;
            checkoutrpt.DataBind();
        }
    }
    
    void shippingdetail()
    {
        mycon();

        cmd = new SqlCommand("select * from shippingdetail", cn);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        if (ds.Tables[0].Rows.Count>0)
        {
            firstname.Text = ds.Tables[0].Rows[0]["firstname"].ToString();
            lastname.Text = ds.Tables[0].Rows[0]["lastname"].ToString();
            email.Text = ds.Tables[0].Rows[0]["email"].ToString();
            add1.Text = ds.Tables[0].Rows[0]["address1"].ToString();
            zip.Text = ds.Tables[0].Rows[0]["zipcode"].ToString();
            country.Text = ds.Tables[0].Rows[0]["country"].ToString();
            state.Text = ds.Tables[0].Rows[0]["state"].ToString();
            mobile.Text = ds.Tables[0].Rows[0]["mobile"].ToString();
            altmobile.Text = ds.Tables[0].Rows[0]["alternativemobile"].ToString();

        }

        cn.Close();
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        mycon();


        if (Request.QueryString["delete"] != null)
        {
            cmd = new SqlCommand("delete from ordertable where productid=@id", cn);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["delete"]);

            cmd.ExecuteNonQuery();

            checkout();

        }
        else
        {
            checkout();
            shippingdetail();

        }
        cn.Close();
    }
    protected void checkoutrpt_ItemDataBound(object sender, RepeaterItemEventArgs e)
    {
        mycon();

        cmd = new SqlCommand("select addproducts.*, ordertable.* from addproducts left join ordertable on addproducts.id = ordertable.productid where ordertable.clientid=@id", cn);
        cmd.Parameters.AddWithValue("@id", Session["clientlogin"]);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        //var dt = Convert.ToString( ds.Tables[0].Rows[0]["date"]) + System.DateTime.Now.AddDays(3).ToString();

        //var dt2 = System.DateTime.Now.ToString();

        //DateTime d1 = Convert.ToDateTime(dt);

        //DateTime d = Convert.ToDateTime(dt2);

        //RepeaterItem item = e.Item;

      //  HtmlGenericControl sample = e.Item.FindControl("dlt_btn") as HtmlGenericControl;

        //if (d>d1)
        //{
        //    Response.Write("Big");
        //    sample.Visible = false;
        //}
        //else
        //{
        //    Response.Write("False");
        //}


        cn.Close();
    }
}
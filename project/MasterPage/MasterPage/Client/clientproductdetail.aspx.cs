using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class Client_clientproductdetail : System.Web.UI.Page
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

    void productdetail()
    {
        mycon();

        if (Request.QueryString["pname"] != null)
        {
            cmd = new SqlCommand("select * from addproducts where productname=@name", cn);
            cmd.Parameters.AddWithValue("@name", Request.QueryString["pname"]);

            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            if (ds.Tables[0].Rows.Count > 0)
            {
                pimg.ImageUrl = ds.Tables[0].Rows[0]["productimage"].ToString();
                pname.Text = ds.Tables[0].Rows[0]["productname"].ToString();

                pprice.Text = ds.Tables[0].Rows[0]["productprice"].ToString();


                brand.Text = ds.Tables[0].Rows[0]["brand"].ToString();
                disc.Text = ds.Tables[0].Rows[0]["discription"].ToString();
                productidtxt.Text = ds.Tables[0].Rows[0]["id"].ToString();



                if (ds.Tables[0].Rows[0]["status"].ToString() == "Active")
                {
                    status.Text = "In Stock";
                }
                else
                {
                    status.Text = "Out of Stock";
                }

            }

        }
    }

    protected void Page_Load(object sender, EventArgs e)
    {

        mycon();

        if (IsPostBack==false)
        {
            productdetail();
          

        }

    }

    protected void addtocartbtn_Click(object sender, EventArgs e)
    {
        mycon();


        if (Session["clientlogin"]==null)
        {
            Response.Redirect("clientlogin.aspx");
        }
        else
        {
            if (Request.QueryString["pname"] != null)
            {
                cmd = new SqlCommand("select * from addtocart where productname=@name and clientid=@client", cn);
                cmd.Parameters.AddWithValue("@name", Request.QueryString["pname"]);
                cmd.Parameters.AddWithValue("@client", Session["clientlogin"]);

                da = new SqlDataAdapter(cmd);
                ds = new DataSet();
                da.Fill(ds);

                if (ds.Tables[0].Rows.Count > 0)
                {
                    gorocart.Visible = true;
                    addtocartbtn.Visible = false;
                }
                else
                {



                    cmd = new SqlCommand("insert into addtocart values(@pid,@clientid,@pname,@pprice,@qty,@img)", cn);

                    cmd.Parameters.AddWithValue("@pid", productidtxt.Text);
                    cmd.Parameters.AddWithValue("@clientid", Session["clientlogin"]);
                    cmd.Parameters.AddWithValue("@pname", pname.Text);
                    cmd.Parameters.AddWithValue("@pprice", pprice.Text);
                    cmd.Parameters.AddWithValue("@qty", pqty.Text);
                    cmd.Parameters.AddWithValue("@img", pimg.ImageUrl);

                    cmd.ExecuteNonQuery();

                }
            }
        }

        
    }
    protected void gorocart_Click(object sender, EventArgs e)
    {
        Response.Redirect("clientcart.aspx");
    }
  
}
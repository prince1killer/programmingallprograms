using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

public partial class Client_clientproduct : System.Web.UI.Page
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

    void category()
    {

        mycon();

        cmd = new SqlCommand("select * from addcategory", cn);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

    }

    void subcategory()
    {
        mycon();

        cmd = new SqlCommand("select * from addsubcategory where category=@name", cn);
        cmd.Parameters.AddWithValue("@name", Request.QueryString["cname"]);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

    }

    //void productimg()
    //{
    //    mycon();

    //    cmd = new SqlCommand("select * from addproducts ", cn);
    //    da = new SqlDataAdapter(cmd);
    //    ds = new DataSet();
    //    da.Fill(ds);


    //    productimgrpt.DataSource = ds;
    //    productimgrpt.DataBind();
    //}

    protected void Page_Load(object sender, EventArgs e)
    {

        mycon();

        if (Request.QueryString["cname"]!=null)
        {
            
            cmd = new SqlCommand("select * from addsubcategory where category=@cname", cn);
            cmd.Parameters.AddWithValue("@cname", Request.QueryString["cname"]);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            productimgrpt.DataSource = ds;
            productimgrpt.DataBind();

        }

        //category();
        //subcategory();
        //productimg();

    }
}
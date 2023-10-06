using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class clientsubcategory : System.Web.UI.Page
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

    //void category()
    //{

    //    mycon();

    //    cmd = new SqlCommand("select * from addcategory", cn);
    //    da = new SqlDataAdapter(cmd);
    //    ds = new DataSet();
    //    da.Fill(ds);

    //}

    //void subcategory()
    //{
    //    mycon();

    //    if (Request.QueryString["cname"]!=null)
    //    {

    //        cmd = new SqlCommand("select * from addsubcategory where category=@name", cn);
    //        cmd.Parameters.AddWithValue("@name", Request.QueryString["cname"]);
    //        da = new SqlDataAdapter(cmd);
    //        ds = new DataSet();
    //        da.Fill(ds);

            
    //    }
    //    else
    //    {
    //        Response.Write("This is Null");
    //    }
    //}

    void productimg()
    {
        mycon();

        if (Request.QueryString["subcat"]!=null)
        {
            cmd = new SqlCommand("select * from addproducts where subcategory=@name", cn);
            cmd.Parameters.AddWithValue("@name", Request.QueryString["subcat"]);

            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);


            productimgrpt.DataSource = ds;
            productimgrpt.DataBind();
            
        }
        else
        {
            Response.Write("This is Null");
        }

    }

    void filter()
    {
        mycon();

        if (Request.QueryString["subcat"] != null)
        {

        cmd = new SqlCommand("select * from addproducts where subcategory=@sub and productprice between @start and @end", cn);
        cmd.Parameters.AddWithValue("@sub", Request.QueryString["subcat"]);
        
        cmd.Parameters.AddWithValue("@start",mintxt.Text);
        cmd.Parameters.AddWithValue("@end", maxtxt.Text);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        productimgrpt.DataSource = ds;
        productimgrpt.DataBind();
            

        }
        cn.Close();
    }

    protected void Page_Load(object sender, EventArgs e)
    {

        //category();

        //if (Request.QueryString["cname"]!=null)
        //{
        //  subcategory();    
        //}

        if (Request.QueryString["subcat"] != null)
        {
            productimg();
        }

    }
    protected void filterbtn_Click(object sender, EventArgs e)
    {
        filter();

      
    }
    protected void shortby_SelectedIndexChanged(object sender, EventArgs e)
    {
         mycon();

         if (shortby.SelectedItem.Text=="High To Low")
         {
             cmd = new SqlCommand("select * from addproducts where subcategory=@sub order by productprice DESC", cn);
             cmd.Parameters.AddWithValue("@sub", Request.QueryString["subcat"]);
            
             da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            productimgrpt.DataSource = ds;
            productimgrpt.DataBind();
         }
         else
         {
             cmd = new SqlCommand("select * from addproducts where subcategory=@sub order by productprice ASC", cn);
             cmd.Parameters.AddWithValue("@sub", Request.QueryString["subcat"]);
             
             da = new SqlDataAdapter(cmd);
             ds = new DataSet();
             da.Fill(ds);

             productimgrpt.DataSource = ds;
             productimgrpt.DataBind();
         }

         cn.Close();
    }
    protected void color_SelectedIndexChanged(object sender, EventArgs e)
    {
        mycon();

        if (Request.QueryString["subcat"] != null)
        {

            if (color.SelectedItem.Text=="--- Select Color ---")
            {
                productimg();
            }
            else
            {
                cmd = new SqlCommand("select * from addproducts where subcategory=@sub and productcolor=@color", cn);
                cmd.Parameters.AddWithValue("@sub", Request.QueryString["subcat"]);
                cmd.Parameters.AddWithValue("@color", color.SelectedItem.Value);

                da = new SqlDataAdapter(cmd);
                ds = new DataSet();
                da.Fill(ds);

                productimgrpt.DataSource = ds;
                productimgrpt.DataBind();
            }

            
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class a_third : System.Web.UI.Page
{
    SqlCommand cmd;
    SqlConnection cn;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        //cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\New E drive\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        cn.Open();
    }



    void loadcategory()
    {
        mycon();
        cmd = new SqlCommand("select * from addcategory", cn);


            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            category_dropdown.DataSource = ds;
            category_dropdown.DataTextField = "Categoryname";
            category_dropdown.DataValueField = "Id";
            category_dropdown.DataBind();


    }


    void loadsubcategory()
    {
        mycon();
        cmd = new SqlCommand("select * from addsubcategory", cn);


        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

      subcategorytextbox.DataSource = ds;
      subcategorytextbox.DataTextField = "subcategory";
      subcategorytextbox.DataValueField = "Id";
      subcategorytextbox.DataBind();

    }

    void subcat(int catid)
    {
        mycon();
        cmd = new SqlCommand("select * from addsubcategory where cid=@cid", cn);
        cmd.Parameters.AddWithValue("@cid", catid);

        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        subcategorytextbox.DataSource = ds;
        subcategorytextbox.DataTextField = "subcategory";
        subcategorytextbox.DataValueField = "Id";
        subcategorytextbox.DataBind();
    }



    protected void Page_Load(object sender, EventArgs e)
    {
        mycon();

        if (IsPostBack == false)
        {



            loadcategory();
            loadsubcategory();


            if (Request.QueryString["edit"] != null)
            {
                mycon();

                cmd = new SqlCommand("select * from addthirdcategory where id=@id", cn);
                cmd.Parameters.AddWithValue("@id", Request.QueryString["edit"]);

                da = new SqlDataAdapter(cmd);
                ds = new DataSet();
                da.Fill(ds);

                if (ds.Tables[0].Rows.Count > 0)
                {
                    category_dropdown.Text = ds.Tables[0].Rows[0]["cid"].ToString();
                    subcategorytextbox.Text = ds.Tables[0].Rows[0]["sid"].ToString();
                    thirdcategorytextbox.Text = ds.Tables[0].Rows[0]["thirdcategory"].ToString();
                    t2.Text = ds.Tables[0].Rows[0]["Status"].ToString();

                    subcat(Convert.ToInt32(ds.Tables[0].Rows[0]["cid"]));

                }
                cmd.ExecuteNonQuery();

            }
        }

    }
    protected void Button1_Click(object sender, EventArgs e)
    {


        mycon();

        if (Request.QueryString["edit"] != null)
        {

            cmd = new SqlCommand("update addthirdcategory set cid=@cid,sid=@sid ,category=@name,subcategory=@subcategory,thirdcategory=@thirdcategory,status=@status where id=@id", cn);
            cmd.Parameters.AddWithValue("@name", category_dropdown.SelectedItem.Text);

            cmd.Parameters.AddWithValue("@subcategory", subcategorytextbox.SelectedItem.Text);
            cmd.Parameters.AddWithValue("@thirdcategory", thirdcategorytextbox.Text);
            cmd.Parameters.AddWithValue("@status", t2.Text);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["edit"]);

            cmd.Parameters.AddWithValue("@cid", category_dropdown.SelectedValue);
            cmd.Parameters.AddWithValue("@sid", subcategorytextbox.SelectedValue);


            cmd.ExecuteNonQuery();

            Response.Write("Update SuccessFull");
            Response.Redirect("http://localhost:1235/a_showthird.aspx");
        }

        else
        {

            cmd = new SqlCommand("select * from addthirdcategory where thirdcategory=@thirdcategory", cn);
            cmd.Parameters.AddWithValue("@thirdcategory", subcategorytextbox.SelectedItem.Text);

            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            if (ds.Tables[0].Rows.Count > 0)
            {
                Response.Write("Already Exit");
            }

            else
            {

                cmd = new SqlCommand("insert into addthirdcategory values (@category,@subcategory,@thirdcategory,@status,@cid,@sid)", cn);
                cmd.Parameters.AddWithValue("@category", category_dropdown.SelectedItem.Text);
                cmd.Parameters.AddWithValue("@cid", category_dropdown.SelectedValue);
                cmd.Parameters.AddWithValue("@sid", subcategorytextbox.SelectedValue);
                cmd.Parameters.AddWithValue("@subcategory", subcategorytextbox.SelectedItem.Text);
                cmd.Parameters.AddWithValue("@thirdcategory", thirdcategorytextbox.Text);
                cmd.Parameters.AddWithValue("@status", t2.Text);
                cmd.ExecuteNonQuery();

            }
        }

    }

    protected void category_dropdown_SelectedIndexChanged(object sender, EventArgs e)
    {
        cmd = new SqlCommand("select * from addsubcategory where cid=@cid", cn);
        cmd.Parameters.AddWithValue("@cid", category_dropdown.SelectedValue);


        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        subcategorytextbox.DataSource = ds;
        subcategorytextbox.DataTextField = "subcategory";
        subcategorytextbox.DataValueField = "Id";
        subcategorytextbox.DataBind();


    }
}
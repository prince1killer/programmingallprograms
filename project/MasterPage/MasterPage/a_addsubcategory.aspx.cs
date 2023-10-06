using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class a_addsubcategory : System.Web.UI.Page
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

    protected void Page_Load(object sender, EventArgs e)
    {
        mycon();

        if (IsPostBack == false)
        {


            cmd = new SqlCommand("select * from addcategory", cn);


            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);


            category_dropdown.DataSource = ds;
            category_dropdown.DataTextField = "categoryname";
            category_dropdown.DataValueField = "id";
            category_dropdown.DataBind();

            //Update Query
            if (Request.QueryString["edit"] != null)
            {
                mycon();

                cmd = new SqlCommand("select * from addsubcategory where id=@id", cn);
                cmd.Parameters.AddWithValue("@id", Request.QueryString["edit"]);

                da = new SqlDataAdapter(cmd);
                ds = new DataSet();
                da.Fill(ds);

                if (ds.Tables[0].Rows.Count > 0)
                {
                    category_dropdown.SelectedItem.Text = ds.Tables[0].Rows[0]["Category"].ToString();
                    subcategorytextbox.Text = ds.Tables[0].Rows[0]["subcategory"].ToString();
                    img.ImageUrl = ds.Tables[0].Rows[0]["subcategoryimg"].ToString();
                    t2.Text = ds.Tables[0].Rows[0]["Status"].ToString();

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

            cmd = new SqlCommand("update addsubcategory set Category=@name,subcategory=@subcategory,subcategoryimg=@pimg,status=@status,cid=@cid where id=@id", cn);
            cmd.Parameters.AddWithValue("@name", category_dropdown.SelectedItem.Text);
            cmd.Parameters.AddWithValue("@subcategory", subcategorytextbox.Text);
            cmd.Parameters.AddWithValue("@status", t2.Text);
            cmd.Parameters.AddWithValue("@cid", category_dropdown.SelectedValue);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["edit"]);

            if (categoryimg.HasFile)
            {
                var path = "~/image/" + categoryimg.FileName;
                categoryimg.SaveAs(Server.MapPath("~/image/" + categoryimg.FileName));
                img.ImageUrl = "~/image" + categoryimg.FileName;
                cmd.Parameters.AddWithValue("@pimg", path);
            }
            else
            {
                cmd.Parameters.AddWithValue("@pimg", img.ImageUrl);

            }

            cmd.ExecuteNonQuery();

            Response.Write("Update SuccessFull");
            Response.Redirect("http://localhost:1235/a_showsub.aspx");
        }

        else
        {

            cmd = new SqlCommand("select * from addsubcategory where subcategory=@subcategory", cn);
            cmd.Parameters.AddWithValue("@subcategory", subcategorytextbox.Text);

            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            if (ds.Tables[0].Rows.Count > 0)
            {
                Response.Write("Already Exit");
            }

            else
            {

                cmd = new SqlCommand("insert into addsubcategory values (@category,@subcategory,@status,@pimg,@cid)", cn);
                cmd.Parameters.AddWithValue("@cid", category_dropdown.SelectedValue);
                cmd.Parameters.AddWithValue("@category", category_dropdown.SelectedItem.Text);
                cmd.Parameters.AddWithValue("@subcategory", subcategorytextbox.Text);
                cmd.Parameters.AddWithValue("@status", t2.Text);

                if (categoryimg.HasFile)
                {
                    var path = "~/image" + categoryimg.FileName;
                    categoryimg.SaveAs(Server.MapPath(path));
                    img.ImageUrl = path;
                    cmd.Parameters.AddWithValue("@pimg", path);
                }


                cmd.ExecuteNonQuery();
            }
        }

    }
}
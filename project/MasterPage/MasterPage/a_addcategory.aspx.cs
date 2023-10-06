using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class a_addcategory : System.Web.UI.Page
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

    

    protected void Button1_Click1(object sender, EventArgs e)
    {
        mycon();



        if (Request.QueryString["update"] != null)
        {

            cmd = new SqlCommand("update addcategory set Categoryname=@name,status=@status where id=@id", cn);
            cmd.Parameters.AddWithValue("@name", categorytxt.Text);
            cmd.Parameters.AddWithValue("@status", t2.Text);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["update"]);


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
            Response.Redirect("a_show.aspx");
        }

        else
        {



            cmd = new SqlCommand("select * from addcategory where categoryname=@name", cn);
            cmd.Parameters.AddWithValue("@name", categorytxt.Text);

            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            if (ds.Tables[0].Rows.Count > 0)
            {
                Response.Write("Already Exit");
            }

            else
            {

                cmd = new SqlCommand("insert into addcategory values (@name,@status,@pimg)", cn);

                cmd.Parameters.AddWithValue("@name", categorytxt.Text);
                cmd.Parameters.AddWithValue("@status", t2.Text);
               

                if (categoryimg.HasFile)
                {
                    var path = "~/image" + categoryimg.FileName;
                    categoryimg.SaveAs(Server.MapPath(path));
                    img.ImageUrl = path;
                    cmd.Parameters.AddWithValue("@pimg", path);
                }

                cmd.ExecuteNonQuery();

                Response.Write("Success");
            }

        }

        cn.Close();
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        Response.Redirect("a_addcategory.aspx");
    }
    protected void Page_Load(object sender, EventArgs e)
    {

        if (IsPostBack == false)
        {

            //Update Query
            if (Request.QueryString["update"] != null)
            {
                mycon();

                cmd = new SqlCommand("select * from addcategory where id=@id", cn);
                cmd.Parameters.AddWithValue("@id", Request.QueryString["update"]);

                da = new SqlDataAdapter(cmd);
                ds = new DataSet();
                da.Fill(ds);

                if (ds.Tables[0].Rows.Count > 0)
                {
                    categorytxt.Text = ds.Tables[0].Rows[0]["Categoryname"].ToString();
                    img.ImageUrl = ds.Tables[0].Rows[0]["CategoryImage"].ToString();
                    t2.Text = ds.Tables[0].Rows[0]["Status"].ToString();

                }
                cmd.ExecuteNonQuery();

            }
        }
        else
        {

            //Deleted query
            if (Request.QueryString["delete"] != null)
            {
                mycon();
                cmd = new SqlCommand("delete from addcategory where id=@id", cn);
                cmd.Parameters.AddWithValue("@id", Request.QueryString["delete"]);

                cmd.ExecuteNonQuery();
            }


        }


    }
}
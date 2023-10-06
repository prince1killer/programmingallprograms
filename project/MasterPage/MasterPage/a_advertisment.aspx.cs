using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class a_advertisment : System.Web.UI.Page
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

            //Update Query
            if (Request.QueryString["edit"] != null)
            {
                mycon();

                cmd = new SqlCommand("select * from advertisment where id=@id", cn);
                cmd.Parameters.AddWithValue("@id", Request.QueryString["edit"]);

                da = new SqlDataAdapter(cmd);
                ds = new DataSet();
                da.Fill(ds);

                if (ds.Tables[0].Rows.Count > 0)
                {
                    titletext.Text = ds.Tables[0].Rows[0]["title"].ToString();
                    subcategorytextbox.Text = ds.Tables[0].Rows[0]["productname"].ToString();
                    descriptiontxt.Text = ds.Tables[0].Rows[0]["description"].ToString();
                    img.ImageUrl = ds.Tables[0].Rows[0]["productimage"].ToString();

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

            cmd = new SqlCommand("update advertisment set title=@title,productname=@pname,description=@desc,productimage=@pimg,status=@status where id=@id", cn);
            cmd.Parameters.AddWithValue("@title", titletext.Text);
            cmd.Parameters.AddWithValue("@pname", subcategorytextbox.Text);
            cmd.Parameters.AddWithValue("@desc", descriptiontxt.Text);

            if (productimage.HasFile)
            {
                var path = "~/image/" + productimage.FileName;
                productimage.SaveAs(Server.MapPath("~/image/" + productimage.FileName));
                img.ImageUrl = "~/image" + productimage.FileName;
                cmd.Parameters.AddWithValue("@pimg", path);
            }
            else
            {
                cmd.Parameters.AddWithValue("@pimg", img.ImageUrl);

            }



            cmd.Parameters.AddWithValue("@status", t2.Text);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["edit"]);


            cmd.ExecuteNonQuery();

            Response.Write("Update SuccessFull");
            Response.Redirect("http://localhost:1235/a_showadvertisment.aspx");
        }

        else
        {

            cmd = new SqlCommand("select * from advertisment where productname=@pname", cn);
            cmd.Parameters.AddWithValue("@pname", subcategorytextbox.Text);

            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);

            if (ds.Tables[0].Rows.Count > 0)
            {
                Response.Write("Already Exit");
            }

            else
            {

                cmd = new SqlCommand("insert into advertisment values (@title,@pname,@desc,@pimg,@status)", cn);
                cmd.Parameters.AddWithValue("@title", titletext.Text);
                cmd.Parameters.AddWithValue("@pname", subcategorytextbox.Text);
                cmd.Parameters.AddWithValue("@desc", descriptiontxt.Text);

                if (productimage.HasFile)
                {
                    var path = "~/image" + productimage.FileName;
                    productimage.SaveAs(Server.MapPath("~/image/" + productimage.FileName));
                    img.ImageUrl = "~/image" + productimage.FileName;
                    cmd.Parameters.AddWithValue("@pimg", path);
                }


                cmd.Parameters.AddWithValue("@status", t2.Text);
                cmd.ExecuteNonQuery();
            }
        }

    }
}
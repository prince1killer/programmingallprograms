using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;

public partial class a_summaryreport : System.Web.UI.Page
{
    SqlConnection cn;
    SqlCommand cmd;
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
      
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
          mycon();

          CultureInfo culture = new CultureInfo("es-ES");
          string mydate = TextBox1.Text;
          DateTime date = DateTime.Parse(mydate, culture);

          var dt1 = date.ToString("dd-MM-yyyy");

          string mydate1 = TextBox2.Text;
          DateTime date1 = DateTime.Parse(mydate1, culture);

          var dt2 = date1.ToString("dd-MM-yyyy");

          cmd = new SqlCommand("select * from ordertable where date between @date1 and @date2", cn);
          cmd.Parameters.AddWithValue("@date1",Convert.ToDateTime(dt1));
          cmd.Parameters.AddWithValue("@date2",Convert.ToDateTime(dt2));

          da = new SqlDataAdapter(cmd);
          ds = new DataSet();
          da.Fill(ds);

          reportsummary.DataSource = ds;
          reportsummary.DataBind();

    }
}
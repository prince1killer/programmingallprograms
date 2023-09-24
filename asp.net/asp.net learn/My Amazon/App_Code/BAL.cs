using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for BAL
/// </summary>
public class BAL
{
    public int catid { get; set; }
    public String catname { get; set; }
    public DateTime catdate { get; set; }
}
public class subBAL
{
    public int catid { get; set; }
    public int subcatid { get; set; }
    public String subcat { get; set; }
    public DateTime subcatdate { get; set; }

}
public class ThirdBal
{
    public int thirdcatid { get; set; }
    public int subcatid { get; set; }
    public int catid { get; set; }
    public string thirdcatname { get; set; }
    public string thirdcatimg { get; set; }
    public DateTime thirdcatdate { get; set; }
    public string thirdcatprice { get; set; }
    public string thirdcatdesc { get; set; }

}

public class registratinBal
{
    public String name { get; set; }
    public String username { get; set; }
    public String email { get; set; }
    public String password { get; set; }
    public DateTime regdate { get; set; }

}
public class orderBal
{
    public int orderid { get; set; }
    public int userid { get; set; }
    public int thirdcatid { get; set; }
    public string thirdcatname { get; set; }
    public string orderaddress { get; set; }
    public DateTime orderdate { get; set; }

}

public class cartBal
{
    public int  cartid{ get; set; }
    public int  userid{ get; set; }
    public int  thirdcatid{ get; set; }
}

<?php  
header('Content-type: application/json');  
/**  
 * Created by PhpStorm.  
 * User: thinkpad  
 * Date: 2015/7/17 0017  
 * Time: 13:24  
 */  
class Action  
{  
    public static function curl_get($url){  
  
           $testurl = $url;  
           $ch = curl_init();    
           curl_setopt($ch, CURLOPT_URL, $testurl);    
            //参数为1表示传输数据，为0表示直接输出显示。  
           curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
            //参数为0表示不带头文件，为1表示带头文件  
           curl_setopt($ch, CURLOPT_HEADER,0);  
           $output = curl_exec($ch);   
           curl_close($ch);   
           return $output;  
     }  
    /*  
     * url:访问路径  
     * array:要传递的数组  
     * */  
    public static function curl_post($url,$array){  
  
        $curl = curl_init();  
        //设置提交的url  
        curl_setopt($curl, CURLOPT_URL, $url);  
        //设置头文件的信息作为数据流输出  
        curl_setopt($curl, CURLOPT_HEADER, 0);  
        //设置获取的信息以文件流的形式返回，而不是直接输出。  
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  
        //设置post方式提交  
        curl_setopt($curl, CURLOPT_POST, 1);  
        //设置post数据  
        $post_data = $array;  
        curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);  
        //执行命令  
        $data = curl_exec($curl);  
        //关闭URL请求  
        curl_close($curl);  
      //获得数据并返回  
        return $data;  
    }
   echo curl_get("http://japi.juhe.cn/joke/content/list.from?sort=desc&page=1&pagesize=1&time=1418816972&key=0986f21c63c29aee8765bd47436d6914");
} 
?>
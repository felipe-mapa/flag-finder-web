<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
  <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z9SXLPB51F"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-Z9SXLPB51F');
    </script>
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="Flag Finder"
      content="Find the flag you are looking for by its characteristics"
    />
    <link rel="apple-touch-icon" href="<?php echo $TEMPLATE_PATH; ?>/logo192.png" />
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json">
    <title>Flag Finder App</title>

    <!-- GOOGLE -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-7485080953225971",
        enable_page_level_ads: true
      });
    </script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
  <script type="text/javascript">
    (function () {
      emailjs.init("user_Frojz41QIomkExIYMqyvr"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
    })();
  </script>
</head>
    <body>
    <div id="root"></div>
    </body>
</html>

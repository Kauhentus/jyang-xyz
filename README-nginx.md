sudo ls /etc/nginx/sites-available/
sudo vi /etc/nginx/sites-available/jyang.xyz 

:%d             (delete all lines)
i -> Ctrl + V   (paste new .nginx)
:wq!            (save file)

sudo ln -s /etc/nginx/sites-available/jyang.xyz /etc/nginx/sites-enabled/ (create link if needed)
sudo nginx -t   (test config syntax)
sudo systemctl reload nginx
<?xml version='1.0' encoding='utf-8'?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name></name>
    <message id="sailfish_crypto-generate_stored_key-la-message">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="508"></location>
        <source>An application wants to store a new key named %1 within collection %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter a passphrase from which a key will be derived. %1 is the key name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>应用程序想要在插件 %3 的集合 %2 中存储名为 %1 的新密钥。</translation>
    </message>
    <message id="sailfish_crypto-generate_stored_key-la-enter_key_passphrase">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="513"></location>
        <source>Enter a passphrase from which the key will be derived.</source>
        <translation>输入一个被派生出的密钥。</translation>
    </message>
    <message id="sailfish_crypto-generate_stored_key-la-repeat_key_passphrase">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="515"></location>
        <source>Repeat the passphrase from which the key will be derived.</source>
        <translation>重新输入一个被派生出的密钥。</translation>
    </message>
    <message id="sailfish_crypto-import_key-la-message">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="728"></location>
        <source>A passphrase is required in order to import the key %1 into collection %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter a passphrase to import a key. %1 is the key name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>需要密码才能将密钥 %1 导入插件 %3 中的集合 %2 中。</translation>
    </message>
    <message id="sailfish_crypto-import_key-la-enter_import_passphrase">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="733"></location>
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="746"></location>
        <source>Enter the key import passphrase.</source>
        <translation>输入密码导入密钥。</translation>
    </message>
    <message id="sailfish_crypto-import_key-la-enter_application_import_passphrase">
        <location filename="CryptoImpl/cryptorequestprocessor.cpp" line="743"></location>
        <source>A passphrase is required in order to import a key with plugin %1 which will then be returned to the application</source>
        <extracomment>This will be displayed to the user, prompting them to enter a passphrase to import a key which will then be returned to the application. %1 is the plugin name.</extracomment>
        <translation>需要密码才能导入带有插件 %1 的密钥，并在之后返还到应用程序中</translation>
    </message>
    <message id="sailfish_secrets-la-show_settings">
        <location filename="SecretsImpl/secrets.cpp" line="2670"></location>
        <source>Show settings</source>
        <extracomment>Show the 'Keys' settings page</extracomment>
        <translation>显示设置</translation>
    </message>
    <message id="sailfish_secrets-no-datacorruption_summary">
        <location filename="SecretsImpl/secrets.cpp" line="2679"></location>
        <source>Corrupted secrets data</source>
        <extracomment>Notification summary text that tells the user that their secrets data is corrupted and needs to be reset.</extracomment>
        <translation>保密数据损坏</translation>
    </message>
    <message id="sailfish_secrets-no-datacorruption_body">
        <location filename="SecretsImpl/secrets.cpp" line="2683"></location>
        <source>Data corruption detected. Please reset your secrets data.</source>
        <extracomment>Notification body text that tells the user that their secrets data is corrupted and needs to be reset.</extracomment>
        <translation>监测到数据损坏。请重设你的保密数据。</translation>
    </message>
    <message id="sailfish_secrets-no-datacorruption_appname">
        <location filename="SecretsImpl/secrets.cpp" line="2687"></location>
        <source>Sailfish OS</source>
        <extracomment>Notification application name for the data corruption notification</extracomment>
        <translation>Sailfish OS</translation>
    </message>
    <message id="sailfish_secrets-create_customlock_collection-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="468"></location>
        <source>%1 wants to create a new secrets collection %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter a passphrase which will be used to encrypt a collection. %1 is the application name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>%1 想要在插件 %3 中创建一个新的秘密集合 %2 。</translation>
    </message>
    <message id="sailfish_secrets-create_customlock_collection-la-enter_new_collection_passphrase">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="471"></location>
        <source>Enter the passphrase which will be used to encrypt the collection.</source>
        <translation>输入将用于加密集合的密码。</translation>
    </message>
    <message id="sailfish_secrets-create_customlock_collection-la-repeat_new_collection_passphrase">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="473"></location>
        <source>Repeat the passphrase which will be used to encrypt the collection.</source>
        <translation>重新输入将用于加密结合的密码。</translation>
    </message>
    <message id="sailfish_secrets-delete_collection-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="764"></location>
        <source>%1 wants to delete collection %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter a lock code which will be used to unlock a collection for deletion. %1 is the application name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>%1 想要在插件 %3 中删除集合 %2 。</translation>
    </message>
    <message id="sailfish_secrets-delete_collection-la-enter_collection_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="767"></location>
        <source>Enter the lock code which will be used to unlock the collection for deletion.</source>
        <translation>输入将用于解锁集合以进行删除的锁码。</translation>
    </message>
    <message id="sailfish_secrets-unlock_collection-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1111"></location>
        <source>%1 wants to read key identifiers from collection %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter a lock code which will be used to unlock a collection to read key identifiers. %1 is the application name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>%1 想要从插件 %3 中的集合 %2 读取密钥标识符。</translation>
    </message>
    <message id="sailfish_secrets-unlock_collection-la-enter_collection_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1114"></location>
        <source>Enter the lock code which will be used to unlock the collection.</source>
        <translation>输入将用于解锁集合的锁码。</translation>
    </message>
    <message id="sailfish_secrets-user_input-la-data_request">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1351"></location>
        <source>An application %1 is requesting input which will be returned to the application: %2</source>
        <extracomment>Inform the user that the application is requesting data. %1 is the application name, %2 is the prompt text supplied by the application.</extracomment>
        <translation>%1 正在请求输入，该输入将返回到应用程序：%2</translation>
    </message>
    <message id="sailfish_secrets-set_collection_secret-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1509"></location>
        <source>%1 wants to store a new secret named %2 into collection %3 in plugin %4.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the secret data which will be stored. %1 is the application name, %2 is the secret name, %3 is the collection name, %4 is the plugin name.</extracomment>
        <translation>%1 想要将名为 %2 的新加密存储到插件 %4 的集合 %3 中。</translation>
    </message>
    <message id="sailfish_secrets-set_collection_secret-la-enter_secret_data">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1515"></location>
        <source>Enter the confidential data which will be stored.</source>
        <translation>输入将被存储的机密数据。</translation>
    </message>
    <message id="sailfish_secrets-set_collection_secret-la-collection_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1565"></location>
        <source>%1 wants to store a new secret named %2 into collection %3 in plugin %4.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the collection in which a new secret will be stored. %1 is the application name, %2 is the secret name, %3 is the collection name, %4 is the plugin name.</extracomment>
        <translation>％1 想要将名为 ％2 的新加密存储到插件 ％4 的集合 ％3 中。</translation>
    </message>
    <message id="sailfish_secrets-la-enter_collection_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="1571"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2596"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3386"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3886"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5146"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5566"></location>
        <source>Enter the collection lock code to unlock the collection.</source>
        <translation>输入收集锁码以解锁集合。</translation>
    </message>
    <message id="sailfish_secrets-set_standalone_secret-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2068"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2300"></location>
        <source>%1 wants to store a new standalone secret named %2 in plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the standalone secret data which will be stored. %1 is the application name, %2 is the secret name, %3 is the plugin name.</extracomment>
        <translation>％1想要在插件％3中存储一个名为％2的新独立密码。</translation>
    </message>
    <message id="sailfish_secrets-set_standalone_secret-la-enter_secret_data">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2073"></location>
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2305"></location>
        <source>Enter the confidential data which will be stored.</source>
        <translation>输入将要存储的机密数据。</translation>
    </message>
    <message id="sailfish_secrets-set_standalone_secret-la-enter_secret_passphrase">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2355"></location>
        <source>Enter the passphrase which will be used to encrypt the secret.</source>
        <translation>输入将用于加密密码的密码。</translation>
    </message>
    <message id="sailfish_secrets-set_standalone_secret-la-repeat_secret_passphrase">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2357"></location>
        <source>Repeat the passphrase which will be used to encrypt the secret.</source>
        <translation>再次输入将用于加密密码的密码。 </translation>
    </message>
    <message id="sailfish_secrets-get_collection_secret-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="2590"></location>
        <source>%1 wants to retrieve secret %2 from collection %3 in plugin %4.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the collection in order to retrieve a secret. %1 is the application name, %2 is the secret name, %3 is the collection name, %4 is the plugin name.</extracomment>
        <translation>%1 想要从插件 %4 的集合 %3 中检索密码 %2 。</translation>
    </message>
    <message id="sailfish_secrets-get_standalone_secret-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3042"></location>
        <source>%1 wants to retrieve standalone secret %2 from plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the passphrase to unlock the standalone secret in order to retrieve it. %1 is the application name, %2 is the standalone secret name, %3 is the plugin name.</extracomment>
        <translation>%1 想要从插件 %3 检索独立密码 %2 。</translation>
    </message>
    <message id="sailfish_secrets-get_standalone_secret-la-enter_secret_passphrase">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3048"></location>
        <source>Enter the passphrase to unlock the secret.</source>
        <translation>输入密码以解锁机密。</translation>
    </message>
    <message id="sailfish_secrets-find_collection_secrets-la-app_search">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3381"></location>
        <source>%1 wants to search for secrets within collection %2 from plugin %3.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the collection in order to filter secrets within it. %1 is the application name, %2 is the collection name, %3 is the plugin name.</extracomment>
        <translation>%1 想要从插件 %3 搜索收藏 %2 中的机密。</translation>
    </message>
    <message id="sailfish_secrets-delete_collection_secret-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="3880"></location>
        <source>%1 wants to delete secret %2 within collection %3 in plugin %4.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the collection in order to delete a secret within it. %1 is the application name, %2 is the secret name, %3 is the collection name, %4 is the plugin name.</extracomment>
        <translation>%1 想要删除插件 %4 中的集合 %3 中的秘密 %2 。</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-message_old_plugin">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4434"></location>
        <source>%1 wants to change the lock code for plugin %2.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the old lock code to unlock the extension plugin in order to change its lock code. %1 is the application name, %2 is the plugin name.</extracomment>
        <translation>%1 想要更改插件 %2 的锁码。</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-enter_old_plugin_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4437"></location>
        <source>Enter the old lock code to unlock the plugin.</source>
        <translation>输入旧的锁码以解锁插件。</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-message_old_master">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4444"></location>
        <source>%1 wants to change the secrets service master lock code.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the old lock code to unlock the secrets service in order to change the master lock code. %1 is the application name.</extracomment>
        <translation>％1想要更改加密服务的主密码。</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-enter_old_master_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4447"></location>
        <source>Enter the old master lock code.</source>
        <translation>输入旧的主锁码。</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-new_plugin_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4511"></location>
        <source>%1 wants to change the lock code for plugin %2.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the new lock code for the plugin. %1 is the application name, %2 is the plugin name.</extracomment>
        <translation>%1 想要更改插件 %2 的锁码。</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-enter_new_plugin_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4514"></location>
        <source>Enter the new lock code for the plugin.</source>
        <translation>为插件输入新的锁码。</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-repeat_new_plugin_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4516"></location>
        <source>Repeat the new lock code for the plugin.</source>
        <translation>再次为插件输入新的锁码。</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-new_master_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4523"></location>
        <source>%1 wants to change the secrets service master lock code.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the new master lock code for the secrets service. %1 is the application name.</extracomment>
        <translation>%1 想要更改加密服务的主锁码。</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-enter_new_master_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4526"></location>
        <source>Enter the new master lock code.</source>
        <translation>输入新的主锁码。</translation>
    </message>
    <message id="sailfish_secrets-modify_lock_code-la-repeat_new_master_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4528"></location>
        <source>Repeat the new master lock code.</source>
        <translation>再次输入新的主锁码。</translation>
    </message>
    <message id="sailfish_secrets-provide_lock_code-la-message_plugin">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4781"></location>
        <source>%1 wants to use plugin %2.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the extension plugin. %1 is the application name, %2 is the plugin name.</extracomment>
        <translation>%1 想要使用插件 %2 。</translation>
    </message>
    <message id="sailfish_secrets-provide_lock_code-la-enter_plugin_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4784"></location>
        <source>Enter the lock code to unlock the plugin.</source>
        <translation>输入锁码以解锁插件。</translation>
    </message>
    <message id="sailfish_secrets-provide_lock_code-la-message_master">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4791"></location>
        <source>%1 wants to use the secrets service.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the secrets service. %1 is the application name.</extracomment>
        <translation>%1 想要使用加密服务 。</translation>
    </message>
    <message id="sailfish_secrets-provide_lock_code-la-enter_master_lock_code">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="4794"></location>
        <source>Enter the master lock code to unlock the secrets service.</source>
        <translation>输入主锁码以解锁加密服务。 </translation>
    </message>
    <message id="sailfish_secrets-use_collection_key_precheck-la-sign_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5101"></location>
        <source>%1 wants to use plugin %2 to sign data using the key named %3 from collection %4 in plugin %5.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the passphrase to unlock the collection prior to using the key to sign data. %1 is the application name, %2 is the crypto plugin name, %3 is the key name, %4 is the collection name, %5 is the storage plugin name.</extracomment>
        <translation>％1想要使用插件％2在插件％5中使用集合％4中名为％3的密钥签名数据。</translation>
    </message>
    <message id="sailfish_secrets-use_collection_key_precheck-la-verify_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5109"></location>
        <source>%1 wants to use plugin %2 to verify a signature using the key named %3 from collection %4 in plugin %5.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the passphrase to unlock the collection prior to using the key to verify a signature. %1 is the application name, %2 is the crypto plugin name, %3 is the key name, %4 is the collection name, %5 is the storage plugin name.</extracomment>
        <translation>％1想要使用插件％2去验证在插件％5的集合％4中正在使用的密钥名为％3的签名。</translation>
    </message>
    <message id="sailfish_secrets-use_collection_key_precheck-la-encrypt_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5117"></location>
        <source>%1 wants to use plugin %2 to encrypt data using the key named %3 from collection %4 in plugin %5.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the passphrase to unlock the collection prior to using the key to encrypt data. %1 is the application name, %2 is the crypto plugin name, %3 is the key name, %4 is the collection name, %5 is the storage plugin name.</extracomment>
        <translation>％1想要使用插件％2在插件％5中使用集合％4中名为％3的密钥验证签名。</translation>
    </message>
    <message id="sailfish_secrets-use_collection_key_precheck-la-decrypt_message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5125"></location>
        <source>%1 wants to use plugin %2 to decrypt data using the key named %3 from collection %4 in plugin %5.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the passphrase to unlock the collection prior to using the key to decrypt data. %1 is the application name, %2 is the crypto plugin name, %3 is the key name, %4 is the collection name, %5 is the storage plugin name.</extracomment>
        <translation>%1 想要使用插件 %2 在插件 %5 中使用集合 %4 中名为 %3 的密钥解密数据。</translation>
    </message>
    <message id="sailfish_secrets-set_collection_key_precheck-la-message">
        <location filename="SecretsImpl/secretsrequestprocessor.cpp" line="5560"></location>
        <source>%1 wants to store a new key named %2 into collection %3 in plugin %4.</source>
        <extracomment>This will be displayed to the user, prompting them to enter the lock code to unlock the collection prior to key storage. %1 is the application name, %2 is the key name, %3 is the collection name, %4 is the plugin name.</extracomment>
        <translation>%1 想要将名为 %2 的新密钥存储在插件 %4 的集合 %3 中。</translation>
    </message>
</context>
</TS>

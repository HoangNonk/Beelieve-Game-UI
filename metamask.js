let metamaskAvailabel = true
let title_metamask = document.getElementById('status_wallet')
let logo_status_meta = document.getElementById('logo_status_meta')

document.addEventListener("DOMContentLoaded", async () => {
    const loginButton = document.getElementById("loginMetamask");

    loginButton.addEventListener("click", async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                await window.ethereum.enable();
                const web3 = new Web3(window.ethereum); 
                const accounts = await web3.eth.getAccounts();

                if (accounts.length > 0) {
                    title_metamask.innerText = "Đăng nhập thành công với địa chỉ: " + accounts[0];
                    console.log(title_metamask);
                }
            } catch (error) {
                console.error(error);
                alert("Lỗi khi đăng nhập với Metamask!");
                console.log(title_metamask);
                alert("Vui lòng cài đặt Metamask và kết nối ví trước khi đăng nhập. Bạn có thể tải Metamask từ đường dẫn https://metamask.io/");
            }
        } else {
            title_metamask.innerText = "You have not install Metamask yet !"
            // logo_status_meta.src = ""
            loginButton.onclick = () => {
                window.location.href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            }
        }
    });
});
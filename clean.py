import os
import shutil

base_dir = r"D:\yusuf_emre_akdeniz"

files_to_remove = [
    "admin.js",
    "script_clean.js",
    "README.md",
    "Yusuf_Emre_Akdeniz_Portfolyo_CV.md",
    "fix_final.py"
]

dirs_to_remove = [
    "baykus-2024",
    "silent-2024",
    "tekno-mid-2024"
]

for file_name in files_to_remove:
    file_path = os.path.join(base_dir, file_name)
    if os.path.exists(file_path):
        os.remove(file_path)
        print(f"Removed file: {file_path}")

for dir_name in dirs_to_remove:
    dir_path = os.path.join(base_dir, dir_name)
    if os.path.exists(dir_path):
        shutil.rmtree(dir_path)
        print(f"Removed directory: {dir_path}")

print("Cleanup complete.")

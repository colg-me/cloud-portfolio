# Automatic Receipt Processing Tool

This project is an **automatic receipt processing system** built using multiple AWS services.  
The goal was to automate the ingestion, processing, storage, and notification of receipts with a scalable and serverless architecture.

## 🚀 AWS Services Used
- **Amazon S3** – Storage bucket with an `incoming` folder to collect receipts.
- **Amazon DynamoDB** – NoSQL database with:
  - `receipt_id` as the primary key.
  - `date` attribute for sorting and queries.
- **AWS Lambda** – Serverless function (Python 3.9) triggered by S3 events.
- **Amazon SES (Simple Email Service)** – To send automatic emails with processed receipts.
- **Amazon Textract** – To extract and analyze text from receipts.
- **IAM (Identity and Access Management)** – To create a role with permissions across all the above services.

## ⚙️ Workflow
1. A new receipt is uploaded to the **S3 bucket** under the `incoming` folder.
2. The **Lambda function** is triggered automatically.
3. Lambda uses **Amazon Textract** to extract relevant information from the receipt.
4. The extracted data is stored in the **DynamoDB** table (using `receipt_id` as the key).
5. An **email notification** is sent via **Amazon SES**, including:
   - A description of the receipt.
   - Confirmation that the receipt has been stored in the database.

## 🔑 Key Implementation Steps
- Created an **S3 bucket** with the `incoming` folder.
- Designed a **DynamoDB table** with a proper schema.
- Configured an **IAM Role** with access to all required services.
- Verified identity in **Amazon SES** to enable email notifications.
- Deployed the **Lambda function** (Python 3.9), added environment variables, and linked it to the S3 trigger.
- Connected all services so the workflow runs **fully automatically**.

## 💡 Lessons Learned
This was a fun and stimulating project that:
- Helped me discover and integrate new AWS services.
- Taught me how to connect different services into a single functional workflow.
- Showed me the potential of **automation** at scale, especially for business and operational processes.

## 📈 Future Potential
I strongly believe that **high-level automations** like this one have great potential for companies.  
They can significantly reduce repetitive tasks, improve efficiency, and ensure better process control.

---
✨ *This project was a hands-on experience that combined serverless computing, automation, and practical cloud design into a real, functional solution.*
